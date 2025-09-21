const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.MetaproPlugin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.MetaproPlugin.Acts.CheckReferralCodeFromDeeplink,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.MetaproPlugin.Acts.RequestAccount,
		C3.Plugins.MetaproPlugin.Cnds.OnAccountReceived,
		C3.Plugins.MetaproPlugin.Acts.CheckIfRegistered,
		C3.Plugins.MetaproPlugin.Cnds.OnIsRegistered,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.MetaproPlugin.Cnds.OnIsNotRegistered
	];
};
self.C3_JsPropNameTable = [
	{MetaproPlugin: 0},
	{Text: 0},
	{refLink: 0}
];

self.InstanceType = {
	MetaproPlugin: class extends self.IInstance {},
	Text: class extends self.ITextInstance {}
}