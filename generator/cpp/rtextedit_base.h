

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RTEXTEDIT_H_BASE
  #define RTEXTEDIT_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RTextEdit.h"
      
    // Base class for RTextEdit
      class RTextEdit_Base : public RTextEdit {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RTextEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RTextEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent
      )
      
        : RTextEdit(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RTextEdit_Base() { }

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
  