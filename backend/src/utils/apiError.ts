class apiError extends Error{
    statusCode: number;
    status: string;
    isOperational: Boolean;

    constructor(statusCode: number, message: string){
        super(message);

        this.statusCode = statusCode;

        this.status = statusCode >= 500? "error" : "fail";
        this.isOperational = true; // custom flag

        // captureStackTrace is available in V8 but not declared in TS lib definitions
        if ((Error as any).captureStackTrace) {
            (Error as any).captureStackTrace(this, this.constructor);
        }
    }
}

export default apiError;