

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RFLOWLAYOUT_H_BASE
  #define RFLOWLAYOUT_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RFlowLayout.h"
      
    // Base class for RFlowLayout
      class RFlowLayout_Base : public RFlowLayout {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RFlowLayout
  // Function: 
  // Parameters: 4
  // preceding Parameters: -1
RFlowLayout_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent, int margin=RDEFAULT_MIN1, int hSpacing=RDEFAULT_MIN1, int vSpacing=RDEFAULT_MIN1
      )
      
        : RFlowLayout(
          parent, margin, hSpacing, vSpacing
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: RFlowLayout
  // Function: 
  // Parameters: 3
  // preceding Parameters: 4
RFlowLayout_Base
        
      (

        
          RJSApi& _h
          
            ,
          int margin=RDEFAULT_MIN1, int hSpacing=RDEFAULT_MIN1, int vSpacing=RDEFAULT_MIN1
      )
      
        : RFlowLayout(
          margin, hSpacing, vSpacing
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RFlowLayout_Base() { }

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
  