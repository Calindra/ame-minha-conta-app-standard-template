<Window>
    <View direction='column' align='center' justify='center' margin='xxs'>
      <Image height={80} src={'https://ame-miniapp-storybook.calindra.com.br/web/v0/static/media/amelogo.f121db0e.png'}/>
      <Text fontSize="xs" textAlign="center" color="neutralcolor-darkest">Detalhes desta versão</Text>
    </View>    
		<View direction='column' align='center' justify='center'>
      <Text textAlign="center" fontSize="xxxs" color="neutralcolor-darkest">Este mini-app foi desenvolvido utilizando as seguintes versões:</Text>
        <Text textAlign="center">Versão da biblioteca de componentes: 0.6.0</Text>
  			<Text textAlign="center">Versão da API de Super Client: 1.0.1</Text>
		</View>
		<Button
      text="Home"
      onClick={() => this.navigateTo('/Home')}
    />
</Window>
