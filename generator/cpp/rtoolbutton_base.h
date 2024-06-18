

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RTOOLBUTTON_H_BASE
  #define RTOOLBUTTON_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RToolButton.h"
      
    // Base class for RToolButton
      class RToolButton_Base : public RToolButton {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RToolButton
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RToolButton_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent
      )
      
        : RToolButton(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RToolButton_Base() { }

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
  