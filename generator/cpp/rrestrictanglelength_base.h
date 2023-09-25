

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RRESTRICTANGLELENGTH_H_BASE
  #define RRESTRICTANGLELENGTH_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RRestrictAngleLength.h"
      
    // Base class for RRestrictAngleLength
      class RRestrictAngleLength_Base : public RRestrictAngleLength {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RRestrictAngleLength
  // Function: 
  // Parameters: 5
  // preceding Parameters: -1
RRestrictAngleLength_Base
        
      (

        
          RJSApi& _h
          
            ,
          RDocumentInterface* documentInterface, double baseAngle, double angle, double baseLength, double length
      )
      
        : RRestrictAngleLength(
          documentInterface, baseAngle, angle, baseLength, length
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: RRestrictAngleLength
  // Function: 
  // Parameters: 1
  // preceding Parameters: 5
RRestrictAngleLength_Base
        
      (

        
          RJSApi& _h
          
            ,
          RDocumentInterface* documentInterface=NULL
      )
      
        : RRestrictAngleLength(
          documentInterface
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RRestrictAngleLength_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void showUiOptions(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void showUiOptionsSup(
        
      )
      
      {
        RRestrictAngleLength::showUiOptions(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void hideUiOptions(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void hideUiOptionsSup(
        
      )
      
      {
        RRestrictAngleLength::hideUiOptions(
          
        );
      }
    

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
  