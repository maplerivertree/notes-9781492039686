qc.reset(8);

qc.write(1);


qc.had();

value result = qc.read();
qc.print('result: ', result);
