import { Theme, createStyles } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
