const areaCircle=(radius)=>{
    const pi=3.14;
    let area=pi*(radius*radius);
    return `area of circle is ${area}`
}

const areaRectangle=(length,breadth)=>{
    let area=length*breadth;
    return `area of rectangle is ${area}`
}

const areaCylinder=(radius,height)=>{
    const pi=3.14;
    let area=(2*pi*radius*height)+(2*pi*radius*radius);
    return `area of cylinder is ${area}`
}

export{areaCircle,areaCylinder,areaRectangle};