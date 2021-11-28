//Custom Function to convert Normal Api Data into SectionList Format !

const Data = arrData => {
  const titleFnx = () => {
    const arr = arrData.map(item => {
      return item.first_name.charAt(0);
    });
    return arr;
  };
  const titleData = titleFnx();
  const title = [...new Set(titleData)].sort();

  const dataFnx = val => {
    const arr = arrData.reduce((acc, item) => {
      if (item.first_name.charAt(0) === val) {
        acc.push(item);
      }
      return acc;
    }, []);
    return arr;
  };

  const data = title.map(item => {
    return {
      title: item,
      data: [
        {
          list: dataFnx(item),
        },
      ],
    };
  });

  return data;
};

export default Data;
