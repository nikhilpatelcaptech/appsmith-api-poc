export default {
	pageload: async () => {
		Api1.run().then(res => {
			console.log('ARYA AUTH RES: ', res);
		}).catch(err => console.log(err))
	},
	listenIframeCommunication: async() => {
		windowMessageListener(
			'http://localhost:8000',
			(message) => {
				console.log('NIKHIL MESSAGE: ', message);
				if (message.type === 'userData') {
					storeValue('userContext', message.userData);
					console.log('NIKHIL authToken: ', this.sanitizeAuthToken(message.authToken));
					storeValue('authToken', this.sanitizeAuthToken(message.authToken));
				}
				if (message.type === 'clearState') {
					clearStore();
					unlistenWindowMessage('http://localhost:8000');
				}
			});
	},
	sanitizeAuthToken: (token = '') => {
		return token.substring(1, token.length-1)
	}
}