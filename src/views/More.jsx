<Window>
  <View direction='column' align='center' justify='center'>
    <Image height={80} src={'https://ame-miniapp-storybook.calindra.com.br/web/v0/static/media/amelogo.f121db0e.png'}/>
    <Text fontSize="xs" textAlign="center" color="neutralcolor-darkest">Detalhes desta versão</Text>
  </View>
  <View direction='column' align='center' justify='center'>
    <Text textAlign="center">Todas as informações sobre os componentes, as API's de comunicação e outros detalhes você encontra em nosso portal de desenvolvimento.</Text>
    <Button
    label="Abrir"
    text="Abrir"
    type='primary'
    onClick={this.accessPortal} />
	</View>
</Window>
