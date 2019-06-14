import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('moveProvider', () => {
    it('should remove the provider that has the input id from the start array', () => {
      // arrange
      const removedProvider = component.unselectedProviders[0];
      // act
      component.moveProvider('unselectedProviders', 'selectedProviders', removedProvider.id);
      // assert
      expect(component.unselectedProviders).not.toContain(removedProvider);
    });

    it('should add the provider that has the input id to the end array', () => {
      // arrange
      const addedProvider = component.unselectedProviders[0];
      // act
      component.moveProvider('unselectedProviders', 'selectedProviders', addedProvider.id);
      // assert
      expect(component.selectedProviders).toContain(addedProvider);
    });

    it('should display an error in the console when invalid id', () => {
      // assert
      expect(() => {
        component.moveProvider('unselectedProviders', 'selectedProviders', 'invalid id');
      }).toThrowError('ID: invalid id is invalid.');
    });
  });

  describe('handleSelect', () => {
    it('should call moveProvider with the correct arguments', () => {
      // arrange
      spyOn(component, 'moveProvider').and.callThrough();
      const start = 'unselectedProviders';
      const end = 'selectedProviders';
      const id = '1';
      // act
      component.handleSelect(id);
      // assert
      expect(component.moveProvider).toHaveBeenCalledWith(start, end, id);
    });
  });

  describe('handleUnselect', () => {
    it('should call moveProvider with the correct arguments', () => {
      // arrange
      component.handleSelect('1');
      spyOn(component, 'moveProvider').and.callThrough();
      const start = 'selectedProviders';
      const end = 'unselectedProviders';
      const id = '1';
      // act
      component.handleUnselect(id);
      // assert
      expect(component.moveProvider).toHaveBeenCalledWith(start, end, id);
    });
  });
});
