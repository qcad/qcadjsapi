

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RMDIAREA_H_BASE
  #define RMDIAREA_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QToolButton>
  
    #include <QQmlEngine>

    
        #include "RMdiArea.h"
      
    // Base class for RMdiArea
      class RMdiArea_Base : public RMdiArea {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RMdiArea
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RMdiArea_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RMdiArea(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RMdiArea_Base() { }

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
  