/// ---- rotating leftward


//    |+>
qc.reset(1);
qc.write(0)
qc.had();

//    |->
qc.reset(1);
qc.write(0)
qc.had();
qc.phase(180)

//    |+Y>
qc.reset(1);
qc.write(0)
qc.had();
qc.phase(90)


//    |-Y>
qc.reset(1);
qc.write(0)
qc.had();
qc.phase(270)
