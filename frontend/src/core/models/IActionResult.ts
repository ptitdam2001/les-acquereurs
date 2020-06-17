enum ResultType {
	Error = "ERROR",
	Warning = "WARNING",
	Success = "SUCCESS",
}

export interface IActionResult {
	type: ResultType
	label: string
}