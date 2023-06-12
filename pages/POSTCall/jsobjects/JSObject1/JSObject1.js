export default {
	listenIframeCommunication: async() => {
		windowMessageListener(
			'https://devenv-crm.cc.capillarytech.com',
			(message) => {
				if (message.type === 'userData') {
					storeValue('userContext', message.userData);
					storeValue('authToken', this.sanitizeAuthToken(message.authToken));
				}
				if (message.type === 'clearState') {
					clearStore();
					unlistenWindowMessage('https://devenv-crm.cc.capillarytech.com');
				}
			});
	},
	sanitizeAuthToken: (token = '') => {
		return token.substring(1, token.length-1)
	}
}