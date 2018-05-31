export function templateVarHandler (variable, object) {

	const templateRegex = /#{([\w\-]+)}/gi;
	let match = templateRegex.exec(variable);
	let tmpVariable = variable;

	if (match == null) {
		if (!object.hasOwnProperty(variable)) {
			return;
		}
		return object[variable];
	} else {
		while (match != null) {
			const tmplVar = match[0];
			const tmplAttrName = match[1];

			if (!object.hasOwnProperty(tmplAttrName)) {
				return;
			}

			const attrVal = object[tmplAttrName];
			tmpVariable = tmpVariable.replace(tmplVar, attrVal);
			match = templateRegex.exec(variable);
		}
		return tmpVariable;
	}
};
