import React from 'react';
// Common Components
import { Wrapper } from 'app/components';
import { useAppDispatch } from 'app/store/hooks';
import { createAuditHash, fetchAuditLogs } from 'app/store/slices/auditSlice';
// Local Components
import Card from './components/Card';

export default function Audit() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const run = async () => {
      await dispatch(
        createAuditHash({
          operation: 'VIEW_AUDIT_SCREEN',
          payload: {
            source: 'mobile-app',
          },
        }),
      );
      await dispatch(fetchAuditLogs());
    };

    run();
  }, [dispatch]);

  return (
    <Wrapper back toolbar="Audit">
      <Card />
    </Wrapper>
  );
}
