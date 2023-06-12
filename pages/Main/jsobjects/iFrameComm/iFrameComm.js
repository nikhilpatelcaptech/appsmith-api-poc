export default {
	listenIframeCommunication: async() => {
		windowMessageListener(
			'https://devenv-crm.cc.capillarytech.com',
			(message) => {
				console.log('NIKHIL MESSAGE: ', message);
				if (message.type === 'userData') {
					storeValue('userContext', message.userData);
					console.log('NIKHIL authToken: ', message.authToken);
					storeValue('authToken', message.authToken);
				}
				if (message.type === 'clearState') {
					clearStore();
					unlistenWindowMessage('https://devenv-crm.cc.capillarytech.com');
				}
			});
	}
}