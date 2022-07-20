import * as rt from "runtypes"

function parseEnv()
{
	console.log(`Host:${process.env.REACT_APP_JF_API_HOST}`)
	const ProcessReactEnv = rt.Record({
		REACT_APP_JF_USERNAME: rt.String,
		REACT_APP_JF_PASSWORD: rt.String,
		REACT_APP_JF_API_HOST: rt.String
	})
        const ProcessEnv = {
		JF_USERNAME:{ProcessReactEnv.REACT_APP_JF_USERNAME},
		JF_PASSWORD:{ProcessReactEnv.REACT_APP_JF_PASSWORD},
		JF_API_HOST:{ProcessReactEnv.REACT_APP_JF_API_HOST}
	}

	let env = ProcessEnv.validate(process.env)
	if (!env.success)
	{
		console.error("wrong env settings")
		console.error(env.code)
		console.error(env.message)
		console.error(env.details)
		// process.exit(1)
	}
	return env.value
}

export const env = parseEnv()
