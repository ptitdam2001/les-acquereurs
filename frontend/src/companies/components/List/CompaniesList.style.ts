import { Theme, createStyles } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

export default (theme: Theme) =>
  createStyles({
		root: {
			width: '100%',
		},
		table: {
			minWidth: 650,
		},
		activeIcon: {
			color: green[500],
		},
		inactiveIcon: {
			color: red[500],
		}
	})
