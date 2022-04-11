<Window>
	<View direction='column' align='center' justify='center'>
    <Image heigth={80} src={'https://ame-miniapp-storybook.calindra.com.br/web/v0/static/media/amelogo.f121db0e.png'}/>
    <View margin='lg' align='center' justify='center'>
    <Text textAlign="center" >Bem-vindo ao seu MiniApp Minha Conta Web</Text>
    </View>
    <View width='100%' align='center' justify='around' margin='md'>
    {this.state.links.map((link, index) => (
      <Touchable key={`${index}_${link.title}`} onClick={() => this.navigateTo(link)}>
        <Text fontSize='large' selectable={true} >{link.title}</Text>
      </Touchable>
    ))}
    </View>
  </View>
</Window>
