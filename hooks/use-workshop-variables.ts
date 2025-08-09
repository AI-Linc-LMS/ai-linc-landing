import { useEffect, useState } from 'react';

interface WorkshopVariables {
  whatsAppGroupLink: string;
  ZoomJoiningLink: string;
  WorkshopTitle: string;
  UpcomingWorkshopDate: string;
  WorkshopTime: string;
  SessionNumber: string;
}

export function useWorkshopVariables() {
  const [data, setData] = useState<WorkshopVariables | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkshopVariables = async () => {
      try {
        const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop/variables/');
        if (!response.ok) {
          throw new Error('Failed to fetch workshop variables');
        }
        const variables = await response.json();
        setData(variables);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshopVariables();
  }, []);

  return { data, loading, error };
}
