const json = {
	swagger: "2.0",
	info: {
		title: "Xpt API",
		description: "X pt API文档",
		version: "1.0.0",
		contact: {}
	},
	paths: {
		"/callback/oss/avatar": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@陆离]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/group_audio": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@卡宾枪]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/im_image": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@卡宾枪]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/refund_image": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@卡宾枪]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/return_image": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@卡宾枪]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/review_image": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@卡宾枪]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/review_video": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@云凡]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/callback/oss/suggestion_image": {
			post: {
				tags: [ "各种云服务的callback\n" ],
				description: "[@卡宾枪]阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				operationId: "Service.阿里云的回调接口，客户端不用调用，但该接口的返回是客户端需要感知的，包含了刚上传文件的url",
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AvatarCallbackResp"
						}
					}
				}
			}
		},
		"/mp/sign": {
			post: {
				tags: [ "微信公众号相关\n" ],
				description: "[@陆离]公众号js签名",
				operationId: "Service.公众号js签名",
				parameters: [
					{
						in: "body",
						name: "body",
						description: "参数",
						required: true,
						schema: {
							$ref: "#/definitions/models.MpSignJsArgs"
						}
					}
				],
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.MpSignJsResp"
						}
					},
					"400000": {
						description: '"参数错误，换个姿势再来一次吧"'
					}
				}
			}
		},
		"/payment_channel_status": {
			post: {
				tags: [ "TOP" ],
				description: "[@卡宾枪]查询当前请求环境下可以使用的支付通道",
				operationId: "Service.查询支付通道",
				parameters: [
					{
						in: "body",
						name: "req_info",
						description: "当前请求环境信息",
						required: true,
						schema: {
							$ref: "#/definitions/models.PaymentChannelStatusReq"
						}
					}
				],
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.PaymentChannelStatusResp"
						}
					},
					"400000": {
						description: '"参数错误，换个姿势再来一次吧"'
					},
					"500000": {
						description: '"服务器正在开小差呢，请稍后重试吧，o(╥﹏╥)o"'
					}
				}
			}
		},
		"/ping": {
			get: {
				tags: [ "TOP" ],
				description: "查看服务是否存活",
				operationId: "Service.查看服务存活",
				parameters: [
					{
						in: "query",
						name: "service",
						description: "服务名，如果为空则检查gate本身即可",
						type: "string"
					}
				],
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.AppsUpdateResp"
						}
					}
				}
			}
		},
		"/upload_token/avatar": {
			get: {
				tags: [ "获取上传token\n" ],
				description: "[@卡宾枪 @陆离]获取上传个人头像的token",
				operationId: "Service.获取上传个人头像的token",
				parameters: [
					{
						in: "query",
						name: "mime",
						description: "图片的mimeType，如image/jpg,image/png等，默认为image/jpg",
						type: "string"
					}
				],
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.UploadToken"
						}
					},
					"400000": {
						description: '"参数错误，换个姿势再来一次吧"'
					},
					"500000": {
						description: '"服务器正在开小差呢，请稍后重试吧，o(╥﹏╥)o"'
					}
				}
			}
		},
		"/upload_token/group_audio": {
			get: {
				tags: [ "获取上传token\n" ],
				description: "[@卡宾枪]获取上传拼单语音留言的token",
				operationId: "Service.获取上传拼单语音留言的token",
				parameters: [
					{
						in: "query",
						name: "group_order_id",
						description: "拼单id",
						required: true,
						type: "string"
					},
					{
						in: "query",
						name: "limit",
						description: "需要的token数(1~10)，不传默认为1",
						type: "integer"
					},
					{
						in: "query",
						name: "mime",
						description: "图片的mimeType，如image/jpg,image/png等，默认为image/jpg",
						type: "string"
					}
				],
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.UploadTokenResp"
						}
					},
					"400000": {
						description: '"参数错误，换个姿势再来一次吧"'
					},
					"500000": {
						description: '"服务器正在开小差呢，请稍后重试吧，o(╥﹏╥)o"'
					}
				}
			}
		},
		"/upload_token/im_image": {
			get: {
				tags: [ "获取上传token\n" ],
				description: "[@卡宾枪]获取上传IM图片的token",
				operationId: "Service.获取上传IM中图片的token",
				parameters: [
					{
						in: "query",
						name: "limit",
						description: "需要的token数(1~10)，不传默认为1",
						type: "integer"
					},
					{
						in: "query",
						name: "mime",
						description: "图片的mimeType，如image/jpg,image/png等，默认为image/jpg",
						type: "string"
					}
				],
				responses: {
					"0": {
						description: '""',
						schema: {
							$ref: "#/definitions/models.UploadTokenResp"
						}
					},
					"400000": {
						description: '"参数错误，换个姿势再来一次吧"'
					},
					"500000": {
						description: '"服务器正在开小差呢，请稍后重试吧，o(╥﹏╥)o"'
					}
				}
			}
		}
	}
}

module.exports = json
