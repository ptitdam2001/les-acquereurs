import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    currentLink: {
      background: theme.palette.primary.main,
    },
    transitionGroup: {
      display: 'flex',
      flex: 1,
    }
  })
