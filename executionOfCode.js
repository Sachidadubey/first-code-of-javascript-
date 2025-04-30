// lets talk about the execution of code --------\
  // js execute their code in two phase  
  //      1>  global execution context  is assigned => to the this variable 
  //       it is single threaded  
  // 2>     function execution context 
  //  3>    eval execution context                     
  // 
  // 
  // 
  // 
  // 
  // phase 1 > memory (creation )phase 
  // phase 2>  execution phase  
  // 
  // 
  // 
  // 
  // global execution 
  // /  assigned to this --this
  //     1......>    memory phase ---- memory assigned to variables ..assigned with ->undefined 
  // definition assigned to the function 
  //           
  // 
  //            2...........?
  // execution phase :>-    assigned value to the  variables  
  
  // every all function creates another executional context
   // ---  new wxwcutional context [new variable environment+ execution thread]
  //         1> memory phase and the execution phase will repeat for the functions as well {
  //      after completing their work it will be delete also }
  //       
  // 
  // 
  //  call stack --- > global execution ->functions come and delete after execution --

  //                                                                              e
