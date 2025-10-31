import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { SessionLogEntry } from '../types';

interface SessionLogProps {
  log: SessionLogEntry[];
}

const SessionLog: React.FC<SessionLogProps> = ({ log }) => {
  return (
    <Paper sx={{ p: 2, mt: 4, backgroundColor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom>Session Log</Typography>
      {log.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No entries yet. Select a response to add it to the log.
        </Typography>
      ) : (
        <List>
          {log.map((entry, index) => (
            <React.Fragment key={entry.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" component="div">
                      Prompt: <Typography component="span" color="text.secondary">{entry.prompt}</Typography>
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <b>{entry.modelName}:</b> {entry.selectedResponse}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(entry.timestamp).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < log.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default SessionLog;
