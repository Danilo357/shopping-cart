import React, { useState, setVisible } from "react"
import { usePotato } from "../Redux/ducks/shopping"
// import { useBooleanKnob } from "@stardust-ui/docs-components"
// import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react"

export default function Sidebarr(props) {
  const { add } = usePotato()
  const [shops, setShops] = useState("")
  // const Sidebar = () => {
  //   const [visible, setVisible] = useBooleanKnob({ name: "visible" })
  // }
  // const visible = ""

  function handleSubmit(e) {
    e.preventDefault()

    add(shops)
    setShops("")
  }

  return (
    <div className="container">
      {/* <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable> */}

      {/* <div className="wrap">
        <form onSubmit={handleSubmit}>
          <button
            placeholder="Add to cart"
            className="input"
            type="text"
            onChange={e => setShops(e.target.value)}
            value={shops}
          >
            Add to cart
          </button>
        </form>
      </div> */}
    </div>
  )
}
