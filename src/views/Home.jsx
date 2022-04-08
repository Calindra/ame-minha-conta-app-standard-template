<Window>
	<View>
  <Image heigth={200} src={'https://ame-miniapp-components.calindra.com.br/img/logo_ame.png'}/>
    <Text textAlign="center">Boilerplate Mini App</Text>
    {this.state.links.map((link, index) => (
      <Touchable key={`index_${link.title}`} onClick={this.navigateTo(link)}>
        <Text>link</Text>
      </Touchable>
    ))}
  </View>
</Window>
