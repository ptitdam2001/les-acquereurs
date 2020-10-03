import { createStyles } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

type StylesProps = {
  active: boolean | undefined
}

export default () =>
  createStyles({
    active: {
      color: (props: StylesProps) => (props.active ? green[500] : red[500]),
    },
  })
