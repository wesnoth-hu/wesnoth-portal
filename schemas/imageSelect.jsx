import { Stack, Card, Text, Select } from '@sanity/ui'

export default function ImageSelect({ onSelect,  onClose}) {
    const handleSelect = useCallback(() => {
        onSelect([
          {
            kind: "assetDocumentId",
            value:
              "",
          },
        ]);
      }, [onSelect]);
    
      const handleClose = useCallback(() => {
        onClose();
      }, [onClose]);
    
    return (
        <>
        <Stack>
            <Card>
                <Select>
                    <option>Bat</option>
                    <option>Dunefolk</option>
                    <option>Human</option>
                    <option>Undead</option>
                    <option>Wose</option>
                    <option>Wolf</option>
                    <option>Gryphon</option>
                    <option>Saurian</option>
                    <option>Goblin</option>
                    <option>Horse</option>
                    <option>Mechanical</option>
                    <option>Naga</option>
                    <option>Ogre</option>
                    <option>Orc</option>
                    <option>Drake</option>
                    <option>Merfolk</option>
                    <option>Falcon</option>
                    <option>Monster</option>
                    <option>Dwarf</option>
                    <option>Troll</option>
                    <option>Elf</option>
                </Select>
            </Card>
        </Stack>
        
        </>
    )
}