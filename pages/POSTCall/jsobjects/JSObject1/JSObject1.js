export default {
	listenIframeCommunication: async() => {
		windowMessageListener(
			'https://devenv-crm.cc.capillarytech.com',
			(message) => {
				console.log('NIKHIL message3: ', message);
				if (message.type === 'userData') {
					storeValue('userContext', message.userData);
					storeValue('authToken', message.authToken);
				}
				if (message.type === 'clearState') {
					clearStore();
					unlistenWindowMessage('https://devenv-crm.cc.capillarytech.com');
				}
			});
	},
	// sanitizeAuthToken: (token = '') => {
	// return token.substring(1, token.length-1)
	// }
}