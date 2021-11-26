let hard = () => {
    let brute = (item) => {
        let num = item,
            output = [],
            sNumber = num.toString();

        for (let i = 0, len = sNumber.length; i < len; i += 1) {
            output.push(+sNumber.charAt(i));
        }
        return output;
    }

    let multiple = (item) => {
        item = brute(266219);
        return item.reduce((acc, rec) => acc * rec);
    }

    let deg = (item) => {
        item = multiple();
        return item ** 3;
    }

    let result = (item) => {
        item = deg();
        let first = String(item).slice(0,2);
        console.log(first)
    }

    result()
}

hard()