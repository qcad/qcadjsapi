

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RCOMMANDLINE_H_BASE
  #define RCOMMANDLINE_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RCommandLine.h"
      
    // Base class for RCommandLine
      class RCommandLine_Base : public RCommandLine {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RCommandLine
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RCommandLine_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RCommandLine(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RCommandLine_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  