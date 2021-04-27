const helper = {
    response: (res:any, result:any, status:number, error:boolean = false) => {
      const resultPrint = {
        error,
        status_code : status||200 ,
        result
      }

      return res.status(resultPrint.status_code).json(resultPrint)
    },
}

export default helper;