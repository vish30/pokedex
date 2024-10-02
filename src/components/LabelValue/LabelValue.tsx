import { Typography } from '@mui/material';

type LabelValueProps = {
  label: string;
  value: string;
};

export const LabelValue: React.FC<LabelValueProps> = (props) => {
  const { label, value } = props;
  return (
    <>
      <Typography variant="caption" display="block">
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </>
  );
};
