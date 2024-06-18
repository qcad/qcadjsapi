

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RMATHCOMBOBOX_H_BASE
  #define RMATHCOMBOBOX_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RMathComboBox.h"
      
    // Base class for RMathComboBox
      class RMathComboBox_Base : public RMathComboBox {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RMathComboBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RMathComboBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=NULL
      )
      
        : RMathComboBox(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RMathComboBox_Base() { }

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
  