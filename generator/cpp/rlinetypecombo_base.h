

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RLINETYPECOMBO_H_BASE
  #define RLINETYPECOMBO_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RLinetypeCombo.h"
      
    // Base class for RLinetypeCombo
      class RLinetypeCombo_Base : public RLinetypeCombo {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RLinetypeCombo
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RLinetypeCombo_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RLinetypeCombo(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RLinetypeCombo_Base() { }

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
  