export class Mapping {
    /**
     * Checks if the given json object is type of a given instance (class/interface) type.
     * @param jsonObject Object to check.
     * @param instanceType The type to check for the object.
     * @returns true if object is of the given instance type; false otherwise.
     */
    static isTypeOf<T>(jsonObject: Object, instanceType: { new(): T; }): boolean {
        // Check that all the properties of the JSON Object are also available in the provided instance type.
        const instanceObject = new instanceType();
        for (let propertyName in instanceObject) {
            if (!jsonObject.hasOwnProperty(propertyName)) {
                return false; // If any property in instance object is missing then we have a mismatch.
            }
        }
        // All the properties are matching between object and the instance type.
        return true;
    };

    /**
     * Checks if the given json object is type of a given instance (class/interface) type.
     * @param jsonObject Object to check.
     * @param instanceType The type to check for the object.
     * @returns true if object is of the given instance type; false otherwise.
     */
    static isCollectionTypeOf<T>(jsonObjectCollection: any[], instanceType: { new(): T; }): boolean {
        // Check that all the properties of the JSON Object are also available in the provided instance type.
        const instanceObject = new instanceType();
        for (let jsonObject of jsonObjectCollection) {
            for (let propertyName in instanceObject) {
                if (!jsonObject.hasOwnProperty(propertyName)) {
                    return false; // If any property in instance object is missing then we have a mismatch.
                }
            }
        }
        // All the properties are matching between object and the instance type.
        return true;
    };
}; // End of class: Mapping
