import * as rt from "runtypes"

function parseEnv()
{
	console.log(`User:${process.env.JF_USERNAME}`)
	console.log(`Host:${process.env.JF_API_HOST}`)
	const ProcessEnv = rt.Record({
		JF_USERNAME: rt.String,
		JF_PASSWORD: rt.String,
		JF_API_HOST: rt.String
	})

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