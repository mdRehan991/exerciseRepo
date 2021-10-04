# counterApp

<--- Mounting Life Cycle Sequence --->

  1) Parent constructor called
  2) Parent getDerivedStateFromProps called
  3) Parent render called
  4) Child constructor called
  5) Child getDerivedStateFromProps called
  6) Child componentDidMount called
  7) Parent componentDidMount called


<--- Updating Life Cycle Sequence --->

  1) Parent getDerivedStateFromProps called
  2) arent shouldComponentUpdate called
  3) Parent render called
  4) Child getDerivedStateFromProps called
  5) Child shouldComponentUpdate called
  6) Child getSnapshotBeforeUpdate called
  7) Parent getSnapshotBeforeUpdate called
  8) Child componentDidUpdate called
  9) Parent componentDidUpdate called


<--- Unmounting Life Cycle Sequence --->

  1) componentwillUnmount() ---> method is invoked immediately before a component is unmounted and destroyed.
