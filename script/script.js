const hard = () => {
    const output = (item) => {
        const num = item,
            output = [],
            sNumber = num.toString();
        for (let i = 0, len = sNumber.length; i < len; i += 1) {
            output.push(+sNumber.charAt(i));
        }
        const multiple = output.reduce((acc, rec) => acc * rec) ** 3;
        return  String(multiple).slice(0,2);
    }
    console.log(output(266219));
}

hard()