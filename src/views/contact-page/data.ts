import { TextFieldProps } from '../../components/TextField/TextField';
import project from '../../images/download.jpeg';

export const projectData = {
  image: project,
  title: 'My Awesome Project',
  description:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  label: 'Mobile app',
  onClick: () => {
    window.alert('project clicked');
  },
};

export const textFieldData: TextFieldProps = {
  variant: 'filled',
};
