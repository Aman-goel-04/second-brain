class ApiResponse<T> {
	message: string;
	statusCode: number;
	data: T;
	readonly status: string;

	constructor(message: string, statusCode: number, data: T) {
		this.message = message;
		this.statusCode = statusCode;
		this.data = data;

		this.status = statusCode >= 400? "fail" : "success";
	}
}

export default ApiResponse;