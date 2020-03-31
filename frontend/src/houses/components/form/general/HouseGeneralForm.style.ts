import { Theme, createStyles } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  })
