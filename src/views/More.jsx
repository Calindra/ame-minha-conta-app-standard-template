<Window>
  <View direction='column' align='center' justify='center'>
    <Image height={200} src={'https://ame-miniapp-components.calindra.com.br/img/logo_ame.png'}/>
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
