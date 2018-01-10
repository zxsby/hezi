SET NAMES UTF8;
DROP DATABASE IF EXISTS tl;
CREATE DATABASE tl CHARSET=UTF8;
USE tl;

CREATE TABlE tlplc(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    a VARCHAR(32) UNIQUE NOT NUll,
    b VARCHAR(32),
    c VARCHAR(32),
    d VARCHAR(32),
    e VARCHAR(32),
    f VARCHAR(32),
    g VARCHAR(32),
    h VARCHAR(32),
    i VARCHAR(32),
    gg VARCHAR(32),
    hh VARCHAR(32),
    ii VARCHAR(32),
    cc VARCHAR(32)
);

CREATE TABlE tlweb(
    wid INT PRIMARY KEY AUTO_INCREMENT,
        a VARCHAR(32) UNIQUE NOT NUll,
        b VARCHAR(32),
        c VARCHAR(32),
        d VARCHAR(32),
        e VARCHAR(32),
        f VARCHAR(32),
        g VARCHAR(32),
        h VARCHAR(32),
        i VARCHAR(32),
        gg VARCHAR(32),
        hh VARCHAR(32),
        ii VARCHAR(32),
        cc VARCHAR(32)
);
