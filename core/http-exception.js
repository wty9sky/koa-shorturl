class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
        super()
        this.msg = msg
        this.errorCode = errorCode
        this.code = code
    }
}

class Success extends HttpException {
    constructor(data,msg, errorCode) {
        super()
        this.msg = msg || 'ok'
        this.errorCode = errorCode || 0
        this.data = data
        this.code = 200
    }
}


class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '内容不存在'
        this.errorCode = errorCode || 10004
        this.code = 404
    }
}

class Forbidden extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '禁止访问'
        this.errorCode = errorCode || 10003
        this.code = 403
    }
}

class ParameterException extends HttpException {
    constructor(data,msg, errorCode) {
        super()
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 10000
        this.data = data || null
        this.code = 203
    }
}


class FileTooLargeException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '文件大小过大'
        this.errorCode = errorCode || 10110
        this.code = 413
    }
}

// class AuthFailed extends HttpException {
//     constructor(msg, errorCode) {
//       super()
//       this.msg = msg || '认证失败'
//       this.errorCode = errorCode || 10010
//       this.code = 401
//     }
//   }
  
//   class InvalidToken extends HttpException {
//     constructor(msg, errorCode) {
//       super()
//       this.msg = msg || '令牌失效'
//       this.errorCode = errorCode || 10020
//       this.code = 401
//     }
//   }
  
//   class ExpiredToken extends HttpException {
//     constructor(msg, errorCode) {
//       super()
//       this.msg = msg || '令牌过期'
//       this.errorCode = errorCode || 10030
//       this.code = 422
//     }
//   }
  
//   class RefreshException extends HttpException {
//     constructor(msg, errorCode) {
//       super()
//       this.msg = msg || 'refresh token 获取失败'
//       this.errorCode = errorCode || 10100
//       this.code = 401
//     }
//   }




module.exports = {
    HttpException,
    Success,
    NotFound,
    Forbidden,
    ParameterException,
    FileTooLargeException
}