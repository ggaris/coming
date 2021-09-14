const getClassName = (type:string | undefined,typeList:Array<string>):string =>{
    if(type === undefined) return typeList[0]
    const typeIndex = typeList.indexOf(type)
    return typeIndex === -1 ?typeList[0] : typeList[typeIndex]
}

export default getClassName