import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
// Fix: Use the exported type ModuleCardData, as ModelPanelData is not defined.
import { ModuleCardData } from '../types';

interface ModelPanelProps {
  data: ModuleCardData;
  isSelected: boolean;
  onSystemInstructionChange: (id: string, value: string) => void;
  onSelectResponse: (modelId: string) => void;
}

const ModelPanel: React.FC<ModelPanelProps> = ({ data, isSelected, onSystemInstructionChange, onSelectResponse }) => {
  return (
    <Card sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
      border: '1px solid',
      borderColor: isSelected ? 'primary.main' : 'grey.800',
      boxShadow: isSelected ? `0 0 15px 5px rgba(212, 175, 55, 0.3)` : 'none',
    }}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>{data.name}</Typography>
        <TextField
          fullWidth
          multiline
          minRows={2}
          maxRows={6}
          variant="outlined"
          label="System Instruction"
          value={data.systemInstruction}
          onChange={(e) => onSystemInstructionChange(data.id, e.target.value)}
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Response:
        </Typography>
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'grey.800',
            borderRadius: 1,
            p: 2,
            minHeight: '200px',
            backgroundColor: 'background.default',
            whiteSpace: 'pre-wrap',
            overflowY: 'auto',
            flexGrow: 1,
          }}
        >
          {data.isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CircularProgress color="primary" />
            </Box>
          ) : data.error ? (
            <Alert severity="error" sx={{ backgroundColor: 'error.dark' }}>{data.error}</Alert>
          ) : (
            <Typography variant="body1">{data.response}</Typography>
          )}
        </Box>
      </CardContent>
      <Box sx={{ p: 2, mt: 'auto', textAlign: 'right' }}>
        <Button
          variant="text"
          onClick={() => onSelectResponse(data.id)}
          disabled={!data.response || data.isLoading || !!data.error}
          color="primary"
        >
          Select this Response
        </Button>
      </Box>
    </Card>
  );
};

export default ModelPanel;
